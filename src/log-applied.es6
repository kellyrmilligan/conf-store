export default function logApplied(applied, filter, node, criterion) {

    if (!applied) {
        return
    }

    const record = {
        filter: filter
    }

    if (criterion) {
        if (typeof criterion === 'object') {
            if (criterion.id) {
                record.valueId = criterion.id
            }
            else {
                record.valueId = (typeof criterion.value === 'object' ? '[object]' : criterion.value.toString())
            }
        }
        else {
            record.valueId = criterion.toString()
        }
    }

    if (node && node.$id) {
        record.filterId = node.$id
    }

    applied.push(record)
}
