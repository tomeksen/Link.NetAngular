using NetProjectAngular.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace NetProjectAngular.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base("name=ExpensesDb")
        {

        }
        public DbSet<Entry> entries { get; set; }

    }
}