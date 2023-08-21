using Application.Core;
using Domain.ClientDTOs.Task;
using MediatR;

namespace Application
{
    public record InsertTaskStatusCommand(TaskStatusDTO TaskStatusDTO)
        : IRequest<Result<TaskStatusDTO>>;
}
