import { Injectable, CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Role } from 'src/graphql.schema.generated';

@Injectable()
class Roles implements CanActivate {
  allRoles;

  constructor(private minRole: Role) {
    this.allRoles = this.generateRoles();
  }

  generateRoles() {
    const allRoles = {};
    const rolesArray = Object.values(Role);
    rolesArray.forEach(role => {
      allRoles[role] = rolesArray.slice(rolesArray.indexOf(role), rolesArray.length);
    });
    return allRoles;
  }

  matchRoles(minRole, userRole) {
    return this.allRoles[userRole].includes(minRole);
  }

  canActivate(context: any): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.args[2].req.user;
    return this.matchRoles(this.minRole, user.role);
  }
}

const RolesGuard = roles => new Roles(roles);

export { RolesGuard };
