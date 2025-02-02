export default function SizeChart() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-20">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            SIZE CHART GUIDE
          </h1>
          <p className="text-xl text-gray-600">Scrubs</p>
        </div>

        {/* Women's Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Women</h2>
          <div className="space-y-8">
            {/* Main Measurements */}
            <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Measurement
                    </th>
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <th
                        key={size}
                        className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider"
                      >
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["Shoulder", "14", "14.5", "15.5", "16.5", "17", "18"],
                    ["Chest", "18.5", "19.5", "21", "23", "25", "27"],
                    ["Waist", "16.5", "17", "17.5", "19.5", "22", "24"],
                    ["Bottom", "19.5", "20.5", "22", "24", "26", "28"],
                    ["Shirt Length", "31", "31", "32", "33", "34", "36"],
                    ["Hip", "19", "20", "21.5", "23.5", "25.5", "27.5"],
                    ["Sleeve", "8", "8", "9", "9", "10", "10"],
                  ].map(([label, ...values], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {label}
                      </td>
                      {values.map((value, i) => (
                        <td
                          key={i}
                          className="px-4 py-3 text-sm text-gray-500 text-center"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Short Shirt */}
            <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Short Shirt
                    </th>
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <th
                        key={size}
                        className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider"
                      >
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      Length
                    </td>
                    {["28", "28", "29", "30", "31", "32"].map((value, i) => (
                      <td
                        key={i}
                        className="px-4 py-3 text-sm text-gray-500 text-center"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Trouser */}
            <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Trouser
                    </th>
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <th
                        key={size}
                        className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider"
                      >
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    ["Length", "38", "38", "39", "40", "40", "40"],
                    ["Bottom", "7", "7", "7", "8", "9", "10"],
                  ].map(([label, ...values], idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {label}
                      </td>
                      {values.map((value, i) => (
                        <td
                          key={i}
                          className="px-4 py-3 text-sm text-gray-500 text-center"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Men's Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Men</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Measurement
                  </th>
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <th
                      key={size}
                      className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      {size}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  ["Shoulder", "16", "16.5", "17½", "18½", "19", "20½"],
                  ["Chest", "19.5", "20.5", "21½", "22½", "24", "25"],
                  ["Bottom", "19.5", "20.5", "21½", "22½", "24", "25"],
                  ["Shirt Length", "28", "29", "30", "31", "32", "32½"],
                  ["Sleeves Length", "8", "8", "9", "9½", "10", "10"],
                  ["Trouser Length", "39", "39", "40", "41", "42", "42"],
                  ["Bottom", "7", "7", "7½", "8", "8½", "9"],
                ].map(([label, ...values], idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {label}
                    </td>
                    {values.map((value, i) => (
                      <td
                        key={i}
                        className="px-4 py-3 text-sm text-gray-500 text-center"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Coat Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Coat</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Measurement
                  </th>
                  {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                    <th
                      key={size}
                      className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                      {size}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  ["Shoulder", "15", "16", "17", "18", "19", "20"],
                  ["Chest", "19", "20", "21", "22", "23", "24"],
                  ["Length", "32", "33", "34", "35", "36", "37"],
                  ["Sleeve", "22", "23", "24", "25", "26", "27"],
                ].map(([label, ...values], idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {label}
                    </td>
                    {values.map((value, i) => (
                      <td
                        key={i}
                        className="px-4 py-3 text-sm text-gray-500 text-center"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
