using server.Data;

var builder = WebApplication.CreateBuilder(args);

// Add required services
builder.Services.AddControllers();              
builder.Services.AddAuthorization();            
builder.Services.AddOpenApi();  
builder.Services.AddSingleton<DapperContext>();


// CORS for Angular dev server
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Swagger (only in development)
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// Middleware order matters
// app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseCors("AllowAngularDev");
app.UseAuthorization();
app.MapControllers();


app.Run();
