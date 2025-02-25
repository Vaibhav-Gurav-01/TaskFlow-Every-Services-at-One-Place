﻿using Microsoft.AspNetCore.Identity;

namespace ServiceManagementApp.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Role { get; set; }
    }
}
