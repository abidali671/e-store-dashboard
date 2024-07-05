export const GridLayout = {
    display: 'grid',
    width: '100%',
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
    borderColor: 'gray.50',
    borderRadius: '16px',
    textAlign: 'center',
    py: '16px'
}
export const cardImg = { width: '148px', height: '148px', backgroundColor: 'orange.900', borderRadius: '50%' }
export const tableRowImg = {
    height: '48px',
    width: '48px',
    objectFit: 'cover',
    borderRadius: '50%',
    objectPosition: 'center',
}