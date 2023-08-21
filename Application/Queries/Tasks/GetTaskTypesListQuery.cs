using Application.Core;
using Domain.ClientDTOs.Task;
using MediatR;

namespace Application.Queries.Tasks
{
    public record GetTaskTypesListQuery() : IRequest<Result<List<TaskTypeDTO>>>;
}
