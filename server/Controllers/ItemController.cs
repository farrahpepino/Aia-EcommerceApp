using server.Dtos;
using server.Services;
using Microsoft.AspNetCore.Mvc;

namespace server.Controllers
{
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly ItemService _itemService;
        private readonly ILogger<ItemController> _logger;

        public ItemController(ItemService itemService, ILogger<ItemController> logger)
        {
            _itemService = itemService;
            _logger = logger;
        }

        [HttpGet("products")]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _itemService.GetProductsAsync();
            return Ok(products);
        }
    }
}
