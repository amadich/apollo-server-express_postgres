import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "Tasks",
})
export default class Task extends Model {
   
   @Column({
      type: DataType.UUIDV4,
      primaryKey: true,
      allowNull: false,
   })
   id!: string;
   
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  completed!: boolean;
}