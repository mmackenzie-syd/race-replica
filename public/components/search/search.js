
class Search extends View {
    constructor() {
        super();
        this.template = 'components/search/search.html';
    }

    setState(state) {
        this.state = state;
    }

    view() {
        const { query, items } = this.state;
        let message = '';
        if (items.length === 0) {
            message = 'No matching articles found.'
        }
        return {
            query,
            items,
            message
        };
    }
}

const search = new Search();
