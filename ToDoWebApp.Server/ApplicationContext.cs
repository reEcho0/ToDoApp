using Microsoft.EntityFrameworkCore;

namespace ToDoWebApp.Server
{
    public class ApplicationContext : DbContext
    {
        public DbSet<ModelTask> Tasks { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) 
        {
            
        }
        
    }
}
