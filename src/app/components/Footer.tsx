import Head from 'next/head'
export default function Footer() {
  return (
    <div className="bg-gray-100 h-[400px]">
      <Head>
        <title>Funiro</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Funiro.
        </h1>

        <p className="text-center text-lg text-gray-600 mb-12">
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Links Section */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Links</h3>
            <ul className="text-gray-600">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Help</h3>
            <ul className="text-gray-600">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Newsletter</h3>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          2023 Funiro. All rights reserved.
        </p>
      </main>
    </div>
  )
}