using ServiceManagementApp.Data;

namespace ServiceManagementApp.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int VendorId { get; set; }
        public Vendor Vendor { get; set; }
    }
}
