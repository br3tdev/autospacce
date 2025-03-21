import { Injectable } from "@nestjs/common"
import { PrismaService } from "src/common/prisma/prisma.service"
import { CreateCompanyInput } from "./dtos/create-company.input"
import { FindManyCompanyArgs, FindUniqueCompanyArgs } from "./dtos/find.args"
import { UpdateCompanyInput } from "./dtos/update-company.input"

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}
  async create({
    description,
    displayName,
    managerId,
    managerName,
  }: CreateCompanyInput) {
    // First check if manager exists
    const existingManager = await this.prisma.manager.findUnique({
      where: { uid: managerId },
    })

    return this.prisma.company.create({
      data: {
        description,
        displayName,
        Managers: {
          // If manager exists, connect to it, otherwise create new one
          ...(existingManager
            ? { connect: { uid: managerId } }
            : {
                create: {
                  displayName: managerName,
                  uid: managerId,
                },
              }),
        },
      },
    })
  }

  findAll(args: FindManyCompanyArgs) {
    return this.prisma.company.findMany(args)
  }

  findOne(args: FindUniqueCompanyArgs) {
    return this.prisma.company.findUnique(args)
  }

  update(updateCompanyInput: UpdateCompanyInput) {
    const { id, ...data } = updateCompanyInput
    return this.prisma.company.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueCompanyArgs) {
    return this.prisma.company.delete(args)
  }
}
