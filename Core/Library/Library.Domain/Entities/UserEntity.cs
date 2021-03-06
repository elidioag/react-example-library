﻿namespace Library.Domain.Entities
{
    public class UserEntity : BaseEntity
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }

        public void Disable()
        {
            Active = false;
        }
    }
}
