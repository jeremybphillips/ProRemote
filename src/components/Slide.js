import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 330,
        height: 280,
        maxHeight: 280,
        margin: 6,
        borderRadius: 4
    },
    slideContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center ',
        backgroundColor: theme.palette.common.black,
    },
    slideText: {
        margin: '10px 20px',
        color: theme.palette.common.white,
        '& p': {
            margin: 0,
        },
    },
    slideFooter: {
        marginLeft: 10,
        color: theme.palette.common.white,
    },
    lyrics: {
        margin: '10px 5px',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    active: {
        borderColor: '#FDDE44',
        borderStyle: 'solid',
        borderWidth: 7
    }
}));

const preso = {
    'action': 'presentationCurrent',
    'presentation': {
        'presentationSlideGroups': [
            {
                'groupName': 'Title',
                'groupColor': '0 0 0 1',
                'groupSlides': [
                    {
                        'slideEnabled': true,
                        'slideNotes': '',
                        'slideAttachmentMask': 0,
                        'slideText': '10,000 Reasons\nPsalms 103',
                        'slideImage': '/9j/4AAQSkZJRgABAQAASABIAAD/4QB0RXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABIAAAAAQAABwAAAAAZAAKgAgAEAAAAAQAAABmgAwAEAAAAAQAAAA4AAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iB+hJQ0NfUFJPRklMRQABAQAAB9hhcHBsAiAAAG1udHJSR0IgWFlaIAfZAAIAGQALABoAC2Fjc3BBUFBMAAAAAGFwcGwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAb2RzY20AAAF4AAAFnGNwcnQAAAcUAAAAOHd0cHQAAAdMAAAAFHJYWVoAAAdgAAAAFGdYWVoAAAd0AAAAFGJYWVoAAAeIAAAAFHJUUkMAAAecAAAADmNoYWQAAAesAAAALGJUUkMAAAecAAAADmdUUkMAAAecAAAADmRlc2MAAAAAAAAAFEdlbmVyaWMgUkdCIFByb2ZpbGUAAAAAAAAAAAAAABRHZW5lcmljIFJHQiBQcm9maWxlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtbHVjAAAAAAAAAB8AAAAMc2tTSwAAACgAAAGEZGFESwAAAC4AAAGsY2FFUwAAACQAAAHadmlWTgAAACQAAAH+cHRCUgAAACYAAAIidWtVQQAAACoAAAJIZnJGVQAAACgAAAJyaHVIVQAAACgAAAKaemhUVwAAABYAAALCbmJOTwAAACYAAALYY3NDWgAAACIAAAL+aGVJTAAAAB4AAAMgaXRJVAAAACgAAAM+cm9STwAAACQAAANmZGVERQAAACwAAAOKa29LUgAAABYAAAO2c3ZTRQAAACYAAALYemhDTgAAABYAAAPMamFKUAAAABoAAAPiZWxHUgAAACIAAAP8cHRQTwAAACYAAAQebmxOTAAAACgAAAREZXNFUwAAACYAAAQedGhUSAAAACQAAARsdHJUUgAAACIAAASQZmlGSQAAACgAAASyaHJIUgAAACgAAATacGxQTAAAACwAAAUCcnVSVQAAACIAAAUuYXJFRwAAACYAAAVQZW5VUwAAACYAAAV2AFYBYQBlAG8AYgBlAGMAbgD9ACAAUgBHAEIAIABwAHIAbwBmAGkAbABHAGUAbgBlAHIAZQBsACAAUgBHAEIALQBiAGUAcwBrAHIAaQB2AGUAbABzAGUAUABlAHIAZgBpAGwAIABSAEcAQgAgAGcAZQBuAOgAcgBpAGMAQx6lAHUAIABoAOwAbgBoACAAUgBHAEIAIABDAGgAdQBuAGcAUABlAHIAZgBpAGwAIABSAEcAQgAgAEcAZQBuAOkAcgBpAGMAbwQXBDAEMwQwBDsETAQ9BDgEOQAgBD8EQAQ+BEQEMAQ5BDsAIABSAEcAQgBQAHIAbwBmAGkAbAAgAGcA6QBuAOkAcgBpAHEAdQBlACAAUgBWAEIAwQBsAHQAYQBsAOEAbgBvAHMAIABSAEcAQgAgAHAAcgBvAGYAaQBskBp1KAAgAFIARwBCACCCcl9pY8+P8ABHAGUAbgBlAHIAaQBzAGsAIABSAEcAQgAtAHAAcgBvAGYAaQBsAE8AYgBlAGMAbgD9ACAAUgBHAEIAIABwAHIAbwBmAGkAbAXkBegF1QXkBdkF3AAgAFIARwBCACAF2wXcBdwF2QBQAHIAbwBmAGkAbABvACAAUgBHAEIAIABnAGUAbgBlAHIAaQBjAG8AUAByAG8AZgBpAGwAIABSAEcAQgAgAGcAZQBuAGUAcgBpAGMAQQBsAGwAZwBlAG0AZQBpAG4AZQBzACAAUgBHAEIALQBQAHIAbwBmAGkAbMd8vBgAIABSAEcAQgAg1QS4XNMMx3xmbpAaACAAUgBHAEIAIGPPj/Blh072TgCCLAAgAFIARwBCACAw1zDtMNUwoTCkMOsDkwO1A70DuQO6A8wAIAPAA8EDvwPGA68DuwAgAFIARwBCAFAAZQByAGYAaQBsACAAUgBHAEIAIABnAGUAbgDpAHIAaQBjAG8AQQBsAGcAZQBtAGUAZQBuACAAUgBHAEIALQBwAHIAbwBmAGkAZQBsDkIOGw4jDkQOHw4lDkwAIABSAEcAQgAgDhcOMQ5IDicORA4bAEcAZQBuAGUAbAAgAFIARwBCACAAUAByAG8AZgBpAGwAaQBZAGwAZQBpAG4AZQBuACAAUgBHAEIALQBwAHIAbwBmAGkAaQBsAGkARwBlAG4AZQByAGkBDQBrAGkAIABSAEcAQgAgAHAAcgBvAGYAaQBsAFUAbgBpAHcAZQByAHMAYQBsAG4AeQAgAHAAcgBvAGYAaQBsACAAUgBHAEIEHgQxBEkEOAQ5ACAEPwRABD4ERAQ4BDsETAAgAFIARwBCBkUGRAZBACAGKgY5BjEGSgZBACAAUgBHAEIAIAYnBkQGOQYnBkUARwBlAG4AZQByAGkAYwAgAFIARwBCACAAUAByAG8AZgBpAGwAZXRleHQAAAAAQ29weXJpZ2h0IDIwMDcgQXBwbGUgSW5jLiwgYWxsIHJpZ2h0cyByZXNlcnZlZC4AWFlaIAAAAAAAAPNSAAEAAAABFs9YWVogAAAAAAAAdE0AAD3uAAAD0FhZWiAAAAAAAABadQAArHMAABc0WFlaIAAAAAAAACgaAAAVnwAAuDZjdXJ2AAAAAAAAAAEBzQAAc2YzMgAAAAAAAQxCAAAF3v//8yYAAAeSAAD9kf//+6L///2jAAAD3AAAwGz/wAARCAAOABkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIEAgIEBgQEBAYIBgYGBggKCAgICAgKDAoKCgoKCgwMDAwMDAwMDg4ODg4OEBAQEBASEhISEhISEhIS/9sAQwEDAwMFBAUIBAQIEw0LDRMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMT/90ABAAC/9oADAMBAAIRAxEAPwD4O+CH/BPrWvjX8LtL+J1r4y0zSo9UExFrcW928kflTPD8zRRMhzs3DBPB55rsJf8AgmJ42jleNPFFnIqkgOtvLhgO4yQcH3APtXyJ4J/aw/aR+G/hi18F+BPGmqaVpNlvEFrbzlIo/MdpG2r2y7Mx9ya0H/bE/aekv/7Uk8a6k11kN5xkBkypyDuxnIIyOeDQB9T+Ov8Agmfr3gfwRrPjWXx1pN2mj2NxfNBHa3qvKLeJpCilogoLbcAkgAnnivzEr6a1z9sz9qnxNol54b1/x5rF3YahBJbXMElwSksMqlJEYd1ZSQR6GvmWgD//2Q==',
                        'slideIndex': '0',
                        'slideTransitionType': -1,
                        'slideLabel': 'Title',
                        'slideColor': '0 0 0 1'
                    }
                ]
            },
            {
                'groupName': 'Chorus',
                'groupColor': '0.5 0 0.5 1',
                'groupSlides': [
                    {
                        'slideEnabled': true,
                        'slideNotes': '',
                        'slideAttachmentMask': 0,
                        'slideText': 'BLESS THE LORD, OH MY SOUL\nOH MY SOUL, WORSHIP HIS HOLY NAME',
                        'slideImage': '/9j/4AAQSkZJRgABAQAASABIAAD/4QB0RXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABIAAAAAQAABwAAAAAZAAKgAgAEAAAAAQAAABmgAwAEAAAAAQAAAA4AAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iB+hJQ0NfUFJPRklMRQABAQAAB9hhcHBsAiAAAG1udHJSR0IgWFlaIAfZAAIAGQALABoAC2Fjc3BBUFBMAAAAAGFwcGwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAb2RzY20AAAF4AAAFnGNwcnQAAAcUAAAAOHd0cHQAAAdMAAAAFHJYWVoAAAdgAAAAFGdYWVoAAAd0AAAAFGJYWVoAAAeIAAAAFHJUUkMAAAecAAAADmNoYWQAAAesAAAALGJUUkMAAAecAAAADmdUUkMAAAecAAAADmRlc2MAAAAAAAAAFEdlbmVyaWMgUkdCIFByb2ZpbGUAAAAAAAAAAAAAABRHZW5lcmljIFJHQiBQcm9maWxlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtbHVjAAAAAAAAAB8AAAAMc2tTSwAAACgAAAGEZGFESwAAAC4AAAGsY2FFUwAAACQAAAHadmlWTgAAACQAAAH+cHRCUgAAACYAAAIidWtVQQAAACoAAAJIZnJGVQAAACgAAAJyaHVIVQAAACgAAAKaemhUVwAAABYAAALCbmJOTwAAACYAAALYY3NDWgAAACIAAAL+aGVJTAAAAB4AAAMgaXRJVAAAACgAAAM+cm9STwAAACQAAANmZGVERQAAACwAAAOKa29LUgAAABYAAAO2c3ZTRQAAACYAAALYemhDTgAAABYAAAPMamFKUAAAABoAAAPiZWxHUgAAACIAAAP8cHRQTwAAACYAAAQebmxOTAAAACgAAAREZXNFUwAAACYAAAQedGhUSAAAACQAAARsdHJUUgAAACIAAASQZmlGSQAAACgAAASyaHJIUgAAACgAAATacGxQTAAAACwAAAUCcnVSVQAAACIAAAUuYXJFRwAAACYAAAVQZW5VUwAAACYAAAV2AFYBYQBlAG8AYgBlAGMAbgD9ACAAUgBHAEIAIABwAHIAbwBmAGkAbABHAGUAbgBlAHIAZQBsACAAUgBHAEIALQBiAGUAcwBrAHIAaQB2AGUAbABzAGUAUABlAHIAZgBpAGwAIABSAEcAQgAgAGcAZQBuAOgAcgBpAGMAQx6lAHUAIABoAOwAbgBoACAAUgBHAEIAIABDAGgAdQBuAGcAUABlAHIAZgBpAGwAIABSAEcAQgAgAEcAZQBuAOkAcgBpAGMAbwQXBDAEMwQwBDsETAQ9BDgEOQAgBD8EQAQ+BEQEMAQ5BDsAIABSAEcAQgBQAHIAbwBmAGkAbAAgAGcA6QBuAOkAcgBpAHEAdQBlACAAUgBWAEIAwQBsAHQAYQBsAOEAbgBvAHMAIABSAEcAQgAgAHAAcgBvAGYAaQBskBp1KAAgAFIARwBCACCCcl9pY8+P8ABHAGUAbgBlAHIAaQBzAGsAIABSAEcAQgAtAHAAcgBvAGYAaQBsAE8AYgBlAGMAbgD9ACAAUgBHAEIAIABwAHIAbwBmAGkAbAXkBegF1QXkBdkF3AAgAFIARwBCACAF2wXcBdwF2QBQAHIAbwBmAGkAbABvACAAUgBHAEIAIABnAGUAbgBlAHIAaQBjAG8AUAByAG8AZgBpAGwAIABSAEcAQgAgAGcAZQBuAGUAcgBpAGMAQQBsAGwAZwBlAG0AZQBpAG4AZQBzACAAUgBHAEIALQBQAHIAbwBmAGkAbMd8vBgAIABSAEcAQgAg1QS4XNMMx3xmbpAaACAAUgBHAEIAIGPPj/Blh072TgCCLAAgAFIARwBCACAw1zDtMNUwoTCkMOsDkwO1A70DuQO6A8wAIAPAA8EDvwPGA68DuwAgAFIARwBCAFAAZQByAGYAaQBsACAAUgBHAEIAIABnAGUAbgDpAHIAaQBjAG8AQQBsAGcAZQBtAGUAZQBuACAAUgBHAEIALQBwAHIAbwBmAGkAZQBsDkIOGw4jDkQOHw4lDkwAIABSAEcAQgAgDhcOMQ5IDicORA4bAEcAZQBuAGUAbAAgAFIARwBCACAAUAByAG8AZgBpAGwAaQBZAGwAZQBpAG4AZQBuACAAUgBHAEIALQBwAHIAbwBmAGkAaQBsAGkARwBlAG4AZQByAGkBDQBrAGkAIABSAEcAQgAgAHAAcgBvAGYAaQBsAFUAbgBpAHcAZQByAHMAYQBsAG4AeQAgAHAAcgBvAGYAaQBsACAAUgBHAEIEHgQxBEkEOAQ5ACAEPwRABD4ERAQ4BDsETAAgAFIARwBCBkUGRAZBACAGKgY5BjEGSgZBACAAUgBHAEIAIAYnBkQGOQYnBkUARwBlAG4AZQByAGkAYwAgAFIARwBCACAAUAByAG8AZgBpAGwAZXRleHQAAAAAQ29weXJpZ2h0IDIwMDcgQXBwbGUgSW5jLiwgYWxsIHJpZ2h0cyByZXNlcnZlZC4AWFlaIAAAAAAAAPNSAAEAAAABFs9YWVogAAAAAAAAdE0AAD3uAAAD0FhZWiAAAAAAAABadQAArHMAABc0WFlaIAAAAAAAACgaAAAVnwAAuDZjdXJ2AAAAAAAAAAEBzQAAc2YzMgAAAAAAAQxCAAAF3v//8yYAAAeSAAD9kf//+6L///2jAAAD3AAAwGz/wAARCAAOABkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIEAgIEBgQEBAYIBgYGBggKCAgICAgKDAoKCgoKCgwMDAwMDAwMDg4ODg4OEBAQEBASEhISEhISEhIS/9sAQwEDAwMFBAUIBAQIEw0LDRMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMT/90ABAAC/9oADAMBAAIRAxEAPwD8/PhJ+wR4j+Lfwn0n4qaV4msoF1UzYsjBO00QilkiyzELGQTHkbWJ+Ycdcd//AMOxvG+4j/hJrTgHn7PJzhtv97uPmHt1w3y18W+Gv2jPjh4P8P2nhXw14lvLTTrBWS3t0ZSkSu7yMFyDgFpHJHqx9TW2f2r/ANooymY+LL3eRgtlM4xjrt9AB9KAPqPxR/wTe8UeFfAuueN9Q8W6eq6LZXF6bdre48yYW8TSFUZVdAW24BYjk88V+a9e9X/7UH7QGqWFzpl94qvZILy3ltJ13KN8E6lJYyQoO11JDDPINeC0Af/Z',
                        'slideIndex': '0',
                        'slideTransitionType': -1,
                        'slideLabel': 'Chorus',
                        'slideColor': '0.5 0 0.5 1'
                    },
                    {
                        'slideEnabled': true,
                        'slideNotes': '',
                        'slideAttachmentMask': 0,
                        'slideText': "SING LIKE NEVER BEFORE, OH MY SOUL\nI'LL WORSHIP YOUR HOLY NAME",
                        'slideImage': '/9j/4AAQSkZJRgABAQAASABIAAD/4QB0RXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABIAAAAAQAABwAAAAAZAAKgAgAEAAAAAQAAABmgAwAEAAAAAQAAAA4AAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iB+hJQ0NfUFJPRklMRQABAQAAB9hhcHBsAiAAAG1udHJSR0IgWFlaIAfZAAIAGQALABoAC2Fjc3BBUFBMAAAAAGFwcGwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC2Rlc2MAAAEIAAAAb2RzY20AAAF4AAAFnGNwcnQAAAcUAAAAOHd0cHQAAAdMAAAAFHJYWVoAAAdgAAAAFGdYWVoAAAd0AAAAFGJYWVoAAAeIAAAAFHJUUkMAAAecAAAADmNoYWQAAAesAAAALGJUUkMAAAecAAAADmdUUkMAAAecAAAADmRlc2MAAAAAAAAAFEdlbmVyaWMgUkdCIFByb2ZpbGUAAAAAAAAAAAAAABRHZW5lcmljIFJHQiBQcm9maWxlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtbHVjAAAAAAAAAB8AAAAMc2tTSwAAACgAAAGEZGFESwAAAC4AAAGsY2FFUwAAACQAAAHadmlWTgAAACQAAAH+cHRCUgAAACYAAAIidWtVQQAAACoAAAJIZnJGVQAAACgAAAJyaHVIVQAAACgAAAKaemhUVwAAABYAAALCbmJOTwAAACYAAALYY3NDWgAAACIAAAL+aGVJTAAAAB4AAAMgaXRJVAAAACgAAAM+cm9STwAAACQAAANmZGVERQAAACwAAAOKa29LUgAAABYAAAO2c3ZTRQAAACYAAALYemhDTgAAABYAAAPMamFKUAAAABoAAAPiZWxHUgAAACIAAAP8cHRQTwAAACYAAAQebmxOTAAAACgAAAREZXNFUwAAACYAAAQedGhUSAAAACQAAARsdHJUUgAAACIAAASQZmlGSQAAACgAAASyaHJIUgAAACgAAATacGxQTAAAACwAAAUCcnVSVQAAACIAAAUuYXJFRwAAACYAAAVQZW5VUwAAACYAAAV2AFYBYQBlAG8AYgBlAGMAbgD9ACAAUgBHAEIAIABwAHIAbwBmAGkAbABHAGUAbgBlAHIAZQBsACAAUgBHAEIALQBiAGUAcwBrAHIAaQB2AGUAbABzAGUAUABlAHIAZgBpAGwAIABSAEcAQgAgAGcAZQBuAOgAcgBpAGMAQx6lAHUAIABoAOwAbgBoACAAUgBHAEIAIABDAGgAdQBuAGcAUABlAHIAZgBpAGwAIABSAEcAQgAgAEcAZQBuAOkAcgBpAGMAbwQXBDAEMwQwBDsETAQ9BDgEOQAgBD8EQAQ+BEQEMAQ5BDsAIABSAEcAQgBQAHIAbwBmAGkAbAAgAGcA6QBuAOkAcgBpAHEAdQBlACAAUgBWAEIAwQBsAHQAYQBsAOEAbgBvAHMAIABSAEcAQgAgAHAAcgBvAGYAaQBskBp1KAAgAFIARwBCACCCcl9pY8+P8ABHAGUAbgBlAHIAaQBzAGsAIABSAEcAQgAtAHAAcgBvAGYAaQBsAE8AYgBlAGMAbgD9ACAAUgBHAEIAIABwAHIAbwBmAGkAbAXkBegF1QXkBdkF3AAgAFIARwBCACAF2wXcBdwF2QBQAHIAbwBmAGkAbABvACAAUgBHAEIAIABnAGUAbgBlAHIAaQBjAG8AUAByAG8AZgBpAGwAIABSAEcAQgAgAGcAZQBuAGUAcgBpAGMAQQBsAGwAZwBlAG0AZQBpAG4AZQBzACAAUgBHAEIALQBQAHIAbwBmAGkAbMd8vBgAIABSAEcAQgAg1QS4XNMMx3xmbpAaACAAUgBHAEIAIGPPj/Blh072TgCCLAAgAFIARwBCACAw1zDtMNUwoTCkMOsDkwO1A70DuQO6A8wAIAPAA8EDvwPGA68DuwAgAFIARwBCAFAAZQByAGYAaQBsACAAUgBHAEIAIABnAGUAbgDpAHIAaQBjAG8AQQBsAGcAZQBtAGUAZQBuACAAUgBHAEIALQBwAHIAbwBmAGkAZQBsDkIOGw4jDkQOHw4lDkwAIABSAEcAQgAgDhcOMQ5IDicORA4bAEcAZQBuAGUAbAAgAFIARwBCACAAUAByAG8AZgBpAGwAaQBZAGwAZQBpAG4AZQBuACAAUgBHAEIALQBwAHIAbwBmAGkAaQBsAGkARwBlAG4AZQByAGkBDQBrAGkAIABSAEcAQgAgAHAAcgBvAGYAaQBsAFUAbgBpAHcAZQByAHMAYQBsAG4AeQAgAHAAcgBvAGYAaQBsACAAUgBHAEIEHgQxBEkEOAQ5ACAEPwRABD4ERAQ4BDsETAAgAFIARwBCBkUGRAZBACAGKgY5BjEGSgZBACAAUgBHAEIAIAYnBkQGOQYnBkUARwBlAG4AZQByAGkAYwAgAFIARwBCACAAUAByAG8AZgBpAGwAZXRleHQAAAAAQ29weXJpZ2h0IDIwMDcgQXBwbGUgSW5jLiwgYWxsIHJpZ2h0cyByZXNlcnZlZC4AWFlaIAAAAAAAAPNSAAEAAAABFs9YWVogAAAAAAAAdE0AAD3uAAAD0FhZWiAAAAAAAABadQAArHMAABc0WFlaIAAAAAAAACgaAAAVnwAAuDZjdXJ2AAAAAAAAAAEBzQAAc2YzMgAAAAAAAQxCAAAF3v//8yYAAAeSAAD9kf//+6L///2jAAAD3AAAwGz/wAARCAAOABkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwACAgICAgIEAgIEBgQEBAYIBgYGBggKCAgICAgKDAoKCgoKCgwMDAwMDAwMDg4ODg4OEBAQEBASEhISEhISEhIS/9sAQwEDAwMFBAUIBAQIEw0LDRMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMT/90ABAAC/9oADAMBAAIRAxEAPwD88/hF+wf4o+Lvw20r4kaX4gtbeHVUlcQNDIzRmKeSAqzcAk7N/wAuRggZzkV6FF/wTL8dyOqP4itowWUFmgfABIyThycDqcAnjgHivj7w1+018ffB3hG18A+GfFd/aaLZBxBZJJmGMSuzuFQggbmZifUk1eH7Vn7Q6qFXxXegDJA+TuMH+HuOD7UAfTXir/gnP4u8J+ENX8X33iWz8rSLC6vmQwSgyC2jaTy1K7sM4XCkjA/iIr84q+g7n9q79oy70fUtAm8X6h9i1iF7e+hVwq3EUilHWUKBuBViDnsTXz5QB//Z',
                        'slideIndex': '0',
                        'slideTransitionType': -1,
                        'slideLabel': '',
                        'slideColor': ''
                    }
                ]
            }
        ],
        'presentationName': '10,000 Reasons (Bless The Lord)',
        'presentationHasTimeline': 0,
        'presentationCurrentLocation': '/Volumes/Jeff/Documents/ProPresenter6/10,000 Reasons (Bless The Lord).pro6'
    }
};

function calcRgba(slideColor) {
    if(!slideColor.trim()) {
        return 'rgba(200, 200, 200, 1)';
    }

    const [r, g, b, a] = slideColor.split(' ');
    const colors = [r, g, b].map(c => c * 255).join();

    return `rgba(${colors}, ${a})`;
}

function Slide(props) {
    const classes = useStyles();
    const { active, onClick, index } = props;
    let { slideText, slideColor } = preso.presentation.presentationSlideGroups[1].groupSlides[0];

    const onSlideClick = () => onClick(index);

    return (
        <Paper className={clsx(classes.paper, { [classes.active]: active })} onClick={onSlideClick}>
            <div className={classes.slideContent}>
                <Typography component="div" color="textSecondary" align="center" className={classes.slideText}>
                    {slideText.split('\n').map((item, i) => <p key={i}>{item}</p>)}
                </Typography>
            </div>
            <div style={{ backgroundColor: calcRgba(slideColor) }}>
                <Typography className={classes.slideFooter} color="textSecondary" align="left" variant="body1">
                    Footer
                </Typography>
            </div>
        </Paper>
    );
}

export default Slide;
