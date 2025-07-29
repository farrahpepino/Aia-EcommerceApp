using server.Data;
using server.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace server.Controllers{

    public class ItemController: ControllerBase{

        [ApiController]
        private readonly DapperContext _context;
        private readonly ILogger<ItemController> _logger;


        public ItemController(DapperContext context, ILogger<ItemController> logger){

            _context = context;
            _logger = logger;
        }


        [HttpGet('/products')]
        public async Task<IActionResult> GetProducts(){

            try{
                var json = System.IO.File.ReadAllText("Data/Products.json");
                var products = JsonSerializer.Deserialize<List<ItemModel>>(json);

                return Ok(products)
                
            }
            catch(Exception ex){
                return StatusCode(500, new { message = "Server error", detail = ex.Message });
            }
        }

    }

}