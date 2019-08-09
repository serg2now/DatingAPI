using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace DatingApp.API.Models
{
    public class Role : IdentityRole<int>
    {
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
