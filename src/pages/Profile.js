import React from "react";

function Profile(props) {
  return (
    <section className="Profile">
      <div className="container text-center p-4 mt-3">
        <h1 className="text-2xl">프로필 설정 🛠</h1>
        <hr />
        <div className="flex flex-col">
          <div className="mb-2 mx-auto">
            <label for="nickname" className="text-sm">
              닉네임
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input type="text" name="nickname" id="nickname" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="mb-2 mx-auto">
            <label for="age" className="text-sm">
              나이
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input type="number" name="age" id="age" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="mb-2 mx-auto">
            <label for="gender" className="text-sm">
              성별
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <input type="text" name="gender" id="gender" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full h-8 sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div className="mt-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">변경</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
