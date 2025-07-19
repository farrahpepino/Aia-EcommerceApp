using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace server.Controllers
{
    [ApiController]
    public class MoodboardController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MoodboardController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Moodboard>> CreateMoodboard([FromBody] Moodboard moodboard)
        {
            _context.Moodboards.Add(moodboard);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMoodboard), new { id = moodboard.Id }, moodboard);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Moodboard>> GetMoodboard(int id)
        {
            var moodboard = await _context.Moodboards
                .Include(m => m.Files)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (moodboard == null)
                return NotFound();

            return moodboard;
        }

        [HttpPost("{id}/files")]
        public async Task<ActionResult<MoodboardFile>> UploadFile(int id, [FromBody] MoodboardFile file)
        {
            file.MoodboardId = id;
            _context.MoodboardFiles.Add(file);
            await _context.SaveChangesAsync();
            return Ok(file);
        }

        [HttpPut("files/{fileId}/position")]
        public async Task<IActionResult> UpdateFilePosition(int fileId, [FromBody] PositionDto position)
        {
            var file = await _context.MoodboardFiles.FindAsync(fileId);
            if (file == null)
                return NotFound();

            file.PositionX = position.X;
            file.PositionY = position.Y;

            await _context.SaveChangesAsync();
            return NoContent();
        }
    }

    public class PositionDto
    {
        public float X { get; set; }
        public float Y { get; set; }
    }
}
