import { IGrid } from '../base/interface';
import { EditRender } from '../renderer/edit-renderer';
import { ServiceLocator } from '../services/service-locator';
import { NormalEdit } from './normal-edit';

/**
 * `DialogEdit` module is used to handle dialog editing actions.
 * @hidden
 */
export class DialogEdit extends NormalEdit {

    protected parent: IGrid;
    protected serviceLocator: ServiceLocator;
    protected renderer: EditRender;

    constructor(parent?: IGrid, serviceLocator?: ServiceLocator, renderer?: EditRender) {
        //constructor
        super(parent, serviceLocator);
        this.parent = parent;
        this.serviceLocator = serviceLocator;
        this.renderer = renderer;
    }

    public closeEdit(): void {
        //closeEdit
        super.closeEdit();
    }

    public addRecord(data?: Object): void {
        //addRecord
        super.addRecord(data);
    }

    public endEdit(): void {
        //endEdit
        super.endEdit();
    }

    public deleteRecord(fieldname?: string, data?: Object): void {
        //deleteRecord
        super.deleteRecord(fieldname, data);
    }

    protected startEdit(tr?: Element): void {
        super.startEdit(tr);
    }

}