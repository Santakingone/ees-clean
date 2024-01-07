﻿using Application.Features.SU.SURT02;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Web.Controllers.SU;

public class Surt02Controller : BaseController
{
    [HttpGet("list")]
    public async Task<ActionResult> List([FromQuery] List.Query query) => Ok(await Mediator.Send(query));

    [HttpGet("master")]
    public async Task<ActionResult> Master([FromQuery] Master.Query query) => Ok(await Mediator.Send(query));

    [HttpGet("detail")]
    public async Task<ActionResult> Detail([FromQuery] Detail.Query query) => Ok(await Mediator.Send(query));

    [HttpPost("create")]
    public async Task<ActionResult> Create([FromBody] Create.Command model) => Ok(await Mediator.Send(model));

    [HttpPut("update")]
    public async Task<ActionResult> Update([FromBody] Edit.Command model) => Ok(await Mediator.Send(model));

    [HttpDelete("delete")]
    public async Task<ActionResult> Delete([FromQuery] Delete.Command command) => Ok(await Mediator.Send(command));
}