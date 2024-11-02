import { Product } from "src/products/entities";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true, nullable: false })
    email: string;

    //select evita que la contraseña aparezca en los registros
    @Column('text', { nullable: false, select: false })
    password: string;

    @Column('text', { nullable: false })
    fullName: string;

    @Column('bool', { default: true })
    isActive: boolean;

    @Column('text', { array: true, default: ['USER'] },)
    roles: string[];

    @OneToMany(
        () => Product,
        product => product.user,
        {onDelete: 'CASCADE',}
    )
    products: Product[];

    @BeforeInsert()
    checkFieldsBeforeinsert() {
        this.email = this.email.toLocaleLowerCase().trim();
    }

    @BeforeInsert()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeinsert();
    }

}
