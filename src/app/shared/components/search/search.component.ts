import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrDatagridStateInterface, ClrForm } from '@clr/angular';
import { SearchService } from '../../services/search.service';

@Component({
    selector: 'app-search',
    styleUrls: ['./search.component.scss'],
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    @HostBinding('app-search') class: true;
    @ViewChild(ClrForm, { static: true }) clrForm: ClrForm;
    componentStatus: 'loaded' | 'loading';
    searchCount: number;
    pageSearch: Array<any>;
    pageSize: number;
    searchFormGroup: FormGroup;
    exampleForm = new FormGroup({
        sample: new FormControl('', Validators.required)
    });

    constructor(
        readonly formBuilder: FormBuilder,
        readonly searchService: SearchService) {
        this.componentStatus = 'loaded';
        this.searchCount = 0;
        this.pageSearch = [];
        this.pageSize = 5;
        this.searchFormGroup = this.formBuilder.group({
            searchKey: ['']
        });

    }

    submit(): void {
        if (this.exampleForm.invalid) {
            this.clrForm.markAsTouched();
        } else {
            // Do submit logic
        }
    }

    ngOnInit(): void {
        // Subscribe to changes of the search input.
        this.searchFormGroup.valueChanges
        .subscribe( changes => {
            this.searchContacts(changes.searchKey);
            }
        );
        // Get contacts' count.
        this.getContactsCount();
        // Get page contacts.
        this.getPageContacts(this.pageSize, 0);
    }
    /**
     *
     * Adds seed contacts to API.
     *
     */
    addSeedContacts(): void {
        this.componentStatus = 'loading';
        this.searchService.addSeedContacts()
        .subscribe(response => {
                this.getPageContacts(this.pageSize, 0);
            },
            error => {
                this.componentStatus = 'loaded';
            });
    }
    /**
     *
     * Gets contacts' count.
     *
     */
    getContactsCount(): void {
        this.searchService.getContactsCount()
        .subscribe(
            response => {
                this.searchCount = response;
            },
            // tslint:disable-next-line: no-empty
            error => { }
        );
    }
    /**
     *
     * Gets page contacts.
     *
     * @param limit Limit per page.
     * @param skip Number of items to skip.
     * @param filters Filters.
     * @param sort Sort criterion.
     */
    getPageContacts(limit: number, skip: number, filters?: { [property: string]: string }, sort?: any): void {
        this.componentStatus = 'loading';
        this.searchService.getPageContacts(limit, skip, filters, sort)
        .subscribe(
            response => {
                this.pageSearch.map(res => response);
                if (filters) {
                    this.searchCount = this.pageSearch.length;
                } else {
                    this.getContactsCount();
                }
                this.componentStatus = 'loaded';
            },
            error => {
                this.componentStatus = 'loaded';
            }
        );
    }
    /**
     *
     * Searches contacts.
     *
     * @param searchKey Search key.
     */
    searchContacts(searchKey): void {
        if (searchKey.length === 0) {
            this.getPageContacts(this.pageSize, 0);
        } else {
            this.componentStatus = 'loading';
            this.searchService.searchContacts(searchKey)
            .subscribe(
                response => {
                    this.pageSearch = response;
                    this.searchCount = this.pageSearch.length;
                    this.componentStatus = 'loaded';
                },
                // tslint:disable-next-line: no-empty
                error => { }
            );
        }
    }

    /**
     *
     * Update page.
     *
     * @param state Clarity Datagrid state.
     */
    updatePage(state: ClrDatagridStateInterface): void {
        let filters: { [property: string]: string };
        if (state.hasOwnProperty('filters')) {
            filters = {};
            // tslint:disable-next-line: no-non-null-assertion
            for (const filter of state.filters!) {
                const { property, value } = filter as { property: string, value: string };
                filters[property] = value;
            }
        }
        // tslint:disable-next-line: no-non-null-assertion disable-next-line: no-unnecessary-type-assertion
        this.getPageContacts(state.page!.size!, state.page!.from!, filters!, state.sort);
    }
}
