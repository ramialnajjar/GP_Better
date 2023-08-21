using Application.Core;
using Domain.ClientDTOs.Evaluation;
using MediatR;

namespace Application
{
    public record IncompleteTaskCommand(IncompleteDTO IncompleteDTO, int Id)
        : IRequest<Result<IncompleteDTO>>;
}
