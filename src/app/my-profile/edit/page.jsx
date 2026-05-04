"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import RequireAuth from "@/components/auth/RequireAuth";
import toast from "react-hot-toast";
import { FiUser, FiImage } from "react-icons/fi";

const EditProfilePage = () => {
  return (
    <RequireAuth>
      {(user) => <UpdateProfileForm user={user} />}
    </RequireAuth>
  );
};

const UpdateProfileForm = ({ user }) => {
  const router = useRouter();
  const [name, setName] = useState(user.name || "");
  const [image, setImage] = useState(user.image || "");
  const [loading, setLoading] = useState(false);

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
    <div className="container-shell section-padding">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
        Update Profile
      </h1>
      <div className="max-w-lg bg-white rounded-xl shadow-sm border border-slate-100 p-8">
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">
              Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full pl-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700 mb-1 block">
              Image URL
            </label>
            <div className="relative">
              <FiImage className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full pl-10"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>

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
};

export default EditProfilePage;
