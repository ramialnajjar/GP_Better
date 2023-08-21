using API.Services;
using Domain.DataModels.User;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Persistence;
using System.Text;

namespace API.Extensions
{
    public static class IdentityServiceExtension
    {
        public static IServiceCollection AddIdentityService(
            this IServiceCollection services,
            IConfiguration configuration
        )
        {
            services
                .AddIdentityCore<ApplicationUser>(opt =>
                {
                    opt.SignIn.RequireConfirmedPhoneNumber = true;
                })
                .AddEntityFrameworkStores<DataContext>();

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["TokenKey"]));
            services
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(
                    opt =>
                        opt.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = key,
                            ValidateIssuer = false,
                            ValidateAudience = false
                        }
                );
            services.AddScoped<TokenService>();

            return services;
        }
    }
}
