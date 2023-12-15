import { ExpenseProps } from "./App"

interface Props {
    expenses: ExpenseProps[]
    onDelete: (id: number) => void
}

function ExpenseList({ expenses, onDelete }: Props) {
    if (!expenses.length) return null;

    return (
        <div className='mt-3'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map((expense, idx) => <tr key={expense.id}>
                            <td>{idx + 1}</td>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.category}</td>
                            <td><button className="btn btn-outline-danger" onClick={() => onDelete(expense.id)}>Delete</button></td>
                        </tr>)
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>${expenses.reduce((acc, cur) => cur.amount + acc, 0)}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default ExpenseList