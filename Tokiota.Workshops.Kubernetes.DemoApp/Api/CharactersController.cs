using Flurl;
using Flurl.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Tokiota.Workshops.Kubernetes.DemoApp.Api
{
    [ApiController]
    [Route("[controller]")]
    public class CharactersController : ControllerBase
    {
        private readonly ILogger<CharactersController> _logger;
        private readonly AppSettingsOptions _appSettings;

        public CharactersController(ILogger<CharactersController> logger, IOptionsSnapshot<AppSettingsOptions> appSettings)
        {
            _logger = logger;
            _appSettings = appSettings.Value;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            _logger.LogInformation("Getting all characters...");

            var randomPage = new Random();

            var charactersPage = await _appSettings.BaseAddress.AppendPathSegment("/api/character").SetQueryParam("page", randomPage.Next(1, 40)).GetJsonAsync();

            return Ok(charactersPage.results);
        }
    }
}
