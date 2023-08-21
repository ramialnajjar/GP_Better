using Application.Core;
using Domain.ClientDTOs.Evaluation;
using MediatR;

namespace Application
{
    public record CompleteTaskCommand(EvaluationDTO CompletedDTO, int Id)
        : IRequest<Result<EvaluationDTO>>;
}
