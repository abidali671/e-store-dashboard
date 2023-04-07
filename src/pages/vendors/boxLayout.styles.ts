export const GridLayout = {
    display: 'grid',
    width: '100%',
    border: '1px solid',
    borderColor: 'gray.100',
    borderRadius: '20px',
    gridTemplateColumns: {
        md: 'repeat(3, 1fr)',
        sm: 'repeat(2, 1fr)',
        xs: '1fr',
    },
    gap: 3,

    p: 3,
}
export const card = {
    border: '1px solid',
    borderColor: 'gray.100',
    borderRadius: '16px',
    textAlign: 'center',
    py: '16px'
}
export const cardImg = { width: '148px', height: '148px', backgroundColor: 'orange.900', borderRadius: '50%' }