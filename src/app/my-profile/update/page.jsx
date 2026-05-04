"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import RequireAuth from "@/components/auth/RequireAuth";
import toast from "react-hot-toast";
import { FiUser, FiImage } from "react-icons/fi";

const UpdateProfilePage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <RequireAuth>
      {(user) => {
        if (!name && !image) {
          setName(user.name || "");
          setImage(user.image || "");
        }

        const handleUpdate = async (e) => {
          e.preventDefault();
          setLoading(true);

          const { data, error } = await authClient.updateUser({
            name,
            image,
          });

          if (error) {
            toast.error(error.message || "Update failed");
            setLoading(false);
            return;
          }

          if (data) {
            toast.success("Profile updated successfully!");
            router.push("/my-profile");
          }

          setLoading(false);
        };

        return (
          <div className="min-h-[80vh] flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
                Update Information
              </h2>

              <form onSubmit={handleUpdate} className="space-y-4">
                {/* name */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">
                    Name
                  </label>
                  <label className="input input-bordered flex items-center gap-2 w-full">
                    <FiUser className="text-slate-400" />
                    <input
                      type="text"
                      placeholder="Your full name"
                      className="grow"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </label>
                </div>

                {/* image url */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-1 block">
                    Photo URL
                  </label>
                  <label className="input input-bordered flex items-center gap-2 w-full">
                    <FiImage className="text-slate-400" />
                    <input
                      type="url"
                      placeholder="https://example.com/photo.jpg"
                      className="grow"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </label>
                </div>

                {/* update button */}
                <button
                  type="submit"
                  className="btn bg-emerald-600 text-white hover:bg-emerald-700 w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    "Update Information"
                  )}
                </button>
              </form>
            </div>
          </div>
        );
      }}
    </RequireAuth>
  );
};

export default UpdateProfilePage;
