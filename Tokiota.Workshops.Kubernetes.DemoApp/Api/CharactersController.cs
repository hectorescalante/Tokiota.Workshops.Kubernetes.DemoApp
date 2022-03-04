using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Tokiota.Workshops.Kubernetes.DemoApp.Api
{
    [ApiController]
    [Route("[controller]")]
    public class CharactersController : ControllerBase
    {
        private readonly ILogger<CharactersController> _logger;

        public CharactersController(ILogger<CharactersController> logger, IOptionsSnapshot<Settings> settings)
        {
            _logger = logger;
        }

        public IActionResult GetAll()
        {
            _logger.LogInformation("Getting all characters...");

            var characters = new List<Character>();

            characters.Add(new Character(1, "test name", "test status", "https://rickandmortyapi.com/api/character/avatar/1.jpeg"));

            return Ok(characters);
        }
    }
}
