﻿namespace ServiceManagementApp.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }  // Store hashed password
        public string Role { get; set; } = "User"; // "Admin" or "User"
    }
}
