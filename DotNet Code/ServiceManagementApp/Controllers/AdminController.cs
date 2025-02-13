using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServiceBookingApp.Data;
using ServiceBookingApp.Models;
using ServiceManagementApp.Data;
using System.Linq;

namespace ServiceBookingApp.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AdminController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Dashboard()
        {
            var dashboardData = new
            {
                TotalUsers = _context.Users.Count(),
                TotalBookings = _context.Bookings.Count(),
                TotalVendors = _context.Vendors.Count(),
                TotalRevenue = _context.Bookings.Sum(b => b.Service.Price)
            };

            return View(dashboardData);
        }
    }
}
