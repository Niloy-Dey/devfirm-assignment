// import invoiceLogo from './invoice-logo.png';
const DownloadInvoice = () => {
    return (
        <div className="container mx-auto mt-8 p-4">
      <div className="border p-6">
        {/* Header */}
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-bold">1474 Avenue Kwame</p>
            <p>Invoice No #I909112</p>
          </div>
          {/* <img src={invoiceLogo} alt="Invoice Logo" className="w-24" /> */}
        </div>

        {/* Sender Info */}
        <div className="mt-4">
          <p className="font-bold">NKRUMAH 10 BP 13395</p>
          <p>Date: 07/09/2022</p>
          <p>10 Ouagadougou, Burkina Faso</p>
          <p>finance@lizetransport.com</p>
          <p>+1 (226) 50 272383</p>
        </div>

        {/* Invoiced To */}
        <div className="mt-4">
          <p className="font-bold">Invoiced To:</p>
          <p>John Doe</p>
          <p>1474 Avenue Kwame, Lize Transport Organization</p>
          <p>NKRUMAH 10 BP 13395</p>
          <p>+1 (226) 50 272383</p>
          <p>10 Ouagadougou, Burkina Faso</p>
          <p>finance@lizetransport.com</p>
        </div>

        {/* Products Table */}
        <div className="mt-8">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Products</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Reservation</th>
                <th className="px-4 py-2">Trip</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* Replace with your product data */}
              <tr>
                <td className="px-4 py-2">Falcon8X TBA/LTI</td>
                <td className="px-4 py-2">Private jet</td>
                <td className="px-4 py-2">R2390</td>
                <td className="px-4 py-2">T2390</td>
                <td className="px-4 py-2">11.500.000</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Champagne TC</td>
                <td className="px-4 py-2">Added after reservation</td>
                <td className="px-4 py-2">R2390</td>
                <td className="px-4 py-2">T2390</td>
                <td className="px-4 py-2">4.900.900</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Coca-Cola 20oz Can</td>
                <td className="px-4 py-2">Added after reservation</td>
                <td className="px-4 py-2">R2390</td>
                <td className="px-4 py-2">T2390</td>
                <td className="px-4 py-2">150.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="mt-8">
          <div className="flex justify-end">
            <div className="w-1/3">
              <div className="flex justify-between">
                <p>Subtotal :</p>
                <p>16.550.000</p>
              </div>
              <div className="flex justify-between">
                <p>TVA :</p>
                <p>2.800.000</p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total :</p>
                <p>19.350.000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <p className="font-bold">Name Of Company</p>
        </div>
      </div>
    </div>
    );
};

export default DownloadInvoice;