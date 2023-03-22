import * as React from 'react';

export interface TableProps {
  className: string;
}

const Table: React.FC<TableProps> = ({ className = '' }): JSX.Element => (
  <div className="root">
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Customer</th>
          <th>Location</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>{' '}
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>{' '}
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>{' '}
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>{' '}
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>{' '}
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>{' '}
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>{' '}
        <tr>
          <td> 1 </td>
          <td>Avatar</td>
          <td> Brno </td>
          <td>51</td>
          <td>
            <p>lost</p>
          </td>
          <td> 59kč </td>
        </tr>
      </tbody>
    </table>
  </div>
);

Table.displayName = 'Table';
export default Table;
