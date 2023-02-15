import React from 'react'

const Notes = () => {
  return (
    <div>
        <h1>
            Notes
        </h1>
        <img src='' alt='' />
        <div className='flex justify-center text-center w-full'>
        <table class="border-collapse border border-slate-400">
  <thead>
    <tr>
      <th class="border border-slate-300">Subject</th>
      <th class="border border-slate-300 ...">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Computer Graphic And Multimedia</td>
      <td class="border border-slate-300 ...">View</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
    <tr>
        <td class="border border-slate-300">
        </td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Notes