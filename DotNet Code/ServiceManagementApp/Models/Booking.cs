namespace ServiceManagementApp.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public int ServiceId { get; set; }
        public Service Service { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
        public DateTime BookingDate { get; set; }
        public string Status { get; set; }  // Pending, Confirmed, Completed
    }
}
