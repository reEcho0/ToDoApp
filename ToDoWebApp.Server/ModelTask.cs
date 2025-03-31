using System.ComponentModel.DataAnnotations;

namespace ToDoWebApp.Server
{
    public class ModelTask
    {
        [Key]
        public int Id { get; set; }
        public string Text { get; set; }
        public bool Completed { get; set; }
    }
}
