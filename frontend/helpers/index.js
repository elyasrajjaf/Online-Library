export const formaterDate = date => {
    const nouvelleDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return nouvelleDate.toLocaleDateString('fr-FR', options)
}