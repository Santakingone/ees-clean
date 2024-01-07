﻿using Application.Interfaces;
using Domain.Entities.SU;
using Microsoft.EntityFrameworkCore;


namespace Persistense;

public partial class CleanDbContext : DbContext, ICleanDbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<UserProfile> userProfiles { get; set; }
    public DbSet<Program> programs { get; set; }
    public DbSet<ProgramLabel> programLabels { get; set; }
    public DbSet<Menu> Menus { get; set; }
    public DbSet<MenuLabel> MenuLabels { get; set; }
    public DbSet<Profile> Profiles { get; set; }
    public DbSet<ProfileMenu> ProfileMenus { get; set; }
}