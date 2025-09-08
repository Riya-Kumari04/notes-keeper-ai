package com.noteskeeper;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/notes")
public class NotesController {

    private List<Note> notes = new ArrayList<>();

    // GET all notes
    @GetMapping
    public List<Note> getNotes() {
        return notes;
    }

    // POST - add a new note
    @PostMapping
    public Note addNote(@RequestBody Note note) {
        notes.add(note);
        return note;
    }
}
