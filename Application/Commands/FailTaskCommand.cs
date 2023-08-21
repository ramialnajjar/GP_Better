using Application.Core;
using Domain.ClientDTOs.Evaluation;
using MediatR;

namespace Application
{
    public record FailTaskCommand(EvaluationDTO FailedDTO, int Id)
        : IRequest<Result<EvaluationDTO>>;
}
