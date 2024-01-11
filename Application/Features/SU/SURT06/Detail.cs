﻿using Application.Interfaces;
using Domain.Entities.SU;
using MediatR;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Features.SU.SURT06;

public class Detail
{
    public class Query : IRequest<Parameter>
    {
        public string ParameterGroupCode { get; set; }
        public string ParameterCode { get; set; }
    }

    public class Handler : IRequestHandler<Query, Parameter>
    {
        private readonly ICleanDbContext _context;
        public Handler(ICleanDbContext context)
        {
            _context = context;
        }

        public async Task<Parameter> Handle(Query request, CancellationToken cancellationToken)
        {
            StringBuilder sql = new StringBuilder();

            sql.AppendLine(@"select p.parameter_group_code ""parameterGroupCode"", 
                                    p.parameter_code ""parameterCode"" , 
                                    p.parameter_value ""parameterValue"" , 
                                    p.remark ,
                                    p.xmin ""rowVersion""
                                from su.""parameter"" p 
                                where p.parameter_group_code = @ParameterGroupCode and p.parameter_code = @ParameterCode");

            return await _context.QueryFirstOrDefaultAsync<Parameter>(sql.ToString(), new { ParameterGroupCode = request.ParameterGroupCode  , ParameterCode  = request.ParameterCode }, cancellationToken);
        }
    }
}
