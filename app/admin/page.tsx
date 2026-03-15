'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Upload, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BeforeAfter {
  id: string;
  service_type: string;
  before_image_url: string;
  after_image_url: string;
  description?: string;
  created_at: string;
}

const services = [
  { id: 'laser-hair-removal', label: 'Laser Hair Removal' },
  { id: 'injectable-treatments', label: 'Injectable Treatments' },
  { id: 'skin-rejuvenation', label: 'Skin Rejuvenation' },
];

export default function AdminPage() {
  const { toast } = useToast();
  const [serviceType, setServiceType] = useState('laser-hair-removal');
  const [beforeImage, setBeforeImage] = useState<File | null>(null);
  const [afterImage, setAfterImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [gallery, setGallery] = useState<BeforeAfter[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Fetch gallery
  useEffect(() => {
    fetchGallery();
  }, [serviceType]);

  const fetchGallery = async () => {
    try {
      const response = await fetch(
        `/api/before-after?serviceType=${serviceType}`
      );
      if (!response.ok) throw new Error('Failed to fetch gallery');
      const data = await response.json();
      setGallery(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load gallery',
        variant: 'destructive',
      });
    }
  };

  const uploadImage = async (file: File, serviceType: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('serviceType', serviceType);

    const response = await fetch('/api/before-after/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('Upload failed');
    const data = await response.json();
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!beforeImage || !afterImage) {
      toast({
        title: 'Error',
        description: 'Please select both before and after images',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    setUploadProgress(0);

    try {
      // Upload before image
      setUploadProgress(25);
      const beforeUrl = await uploadImage(beforeImage, serviceType);

      // Upload after image
      setUploadProgress(50);
      const afterUrl = await uploadImage(afterImage, serviceType);

      // Create gallery entry
      setUploadProgress(75);
      const response = await fetch('/api/before-after', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_type: serviceType,
          before_image_url: beforeUrl,
          after_image_url: afterUrl,
          description: description || null,
        }),
      });

      if (!response.ok) throw new Error('Failed to create entry');

      setUploadProgress(100);
      toast({
        title: 'Success',
        description: 'Before/After uploaded successfully',
      });

      // Reset form
      setBeforeImage(null);
      setAfterImage(null);
      setDescription('');
      setUploadProgress(0);

      // Refresh gallery
      fetchGallery();
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Upload failed',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;

    try {
      const response = await fetch('/api/before-after', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error('Delete failed');

      toast({
        title: 'Success',
        description: 'Entry deleted',
      });

      fetchGallery();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete entry',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Admin Panel</h1>
        <p className="text-gray-600 mb-12">Manage before/after gallery for services</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload New Entry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Select */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service Type
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue"
                    >
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Before Image */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Before Image
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setBeforeImage(
                            e.target.files?.[0] || null
                          )
                        }
                        className="w-full"
                      />
                      {beforeImage && (
                        <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {beforeImage.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* After Image */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      After Image
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setAfterImage(e.target.files?.[0] || null)
                        }
                        className="w-full"
                      />
                      {afterImage && (
                        <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          {afterImage.name}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description (Optional)
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="e.g., 6 laser sessions, 2 months apart"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-medical-blue"
                      rows={3}
                    />
                  </div>

                  {/* Progress */}
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-medical-blue h-2 rounded-full transition-all"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark text-white"
                  >
                    {loading ? 'Uploading...' : 'Upload'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Gallery List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {
                    services.find((s) => s.id === serviceType)?.label
                  }
                  Gallery
                </CardTitle>
              </CardHeader>
              <CardContent>
                {gallery.length === 0 ? (
                  <div className="flex items-center gap-2 text-gray-500 py-8">
                    <AlertCircle className="w-4 h-4" />
                    <p>No before/after entries for this service yet</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {gallery.map((item) => (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="grid grid-cols-2 gap-1">
                          <div className="aspect-square overflow-hidden bg-gray-100">
                            <img
                              src={item.before_image_url}
                              alt="Before"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="aspect-square overflow-hidden bg-gray-100">
                            <img
                              src={item.after_image_url}
                              alt="After"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="p-3">
                          {item.description && (
                            <p className="text-sm text-gray-600 mb-2">
                              {item.description}
                            </p>
                          )}
                          <p className="text-xs text-gray-400 mb-3">
                            {new Date(item.created_at).toLocaleDateString()}
                          </p>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="w-full flex items-center justify-center gap-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}