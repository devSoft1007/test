import {memo} from 'react'

const Table = (props) => {
    const {cols=[], rows=[]} = props
  return (
    <div>
        <table>
            <thead>

                <tr>
                    {cols.map((item,index) => {
                        return (
                            <th key={index}>{item}</th>
                        )
                    })}
                </tr>
                </thead>
                <tbody>
                    {rows.map((item,index) => {
                        return (
                            <tr key={index}>
                                {item.map((subItem,index) => <td key={index}>{subItem}</td>)}
                            </tr>
                        )
                    })}
                
                </tbody>
        </table>
    </div>
  )
}

export default memo(Table)