import { ApiProperty } from '@nestjs/swagger'

export class TaskDTO {
    id: string

    @ApiProperty()
    title: string

    @ApiProperty()
    description: string
}