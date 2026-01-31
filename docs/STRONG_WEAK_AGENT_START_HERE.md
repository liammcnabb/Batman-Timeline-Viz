# Strong → Weak Agent Workflow: Start Here

**A Context Engineering pattern for fully-automated, reproducible issue resolution**

---

## 🎯 What This Is

A workflow where:

1. **Strong Agent** investigates an issue, proves it's real, and creates exact task instructions
2. **Weak Agents** (code, tests, docs) execute those instructions sequentially
3. **Everything is automated** - no manual coordination needed
4. **Everything is verifiable** - proof at every step

**Result:** Complex issues fixed reliably, with full documentation trail.

---

## 📖 Documentation (Pick Your Path)

### 🚀 I Just Want to Understand It (5-10 min)

**→ Read:** [QUICK_REFERENCE_STRONG_WEAK_WORKFLOW.md](./QUICK_REFERENCE_STRONG_WEAK_WORKFLOW.md)

- One-page cheat sheet
- Real example walkthrough
- Key rules and troubleshooting

### 🏗️ I Want to Learn the Full Pattern (30-45 min)

**→ Read:** [STRONG_WEAK_AGENT_WORKFLOW.md](./STRONG_WEAK_AGENT_WORKFLOW.md)

- Complete workflow definition
- Phase 1: Strong Agent (diagnosis)
- Phase 2: Weak Agent (implementation)
- Scaling strategies
- Future enhancements

### 💻 I Want to Implement It (2-4 hours)

**→ Read + Study:**

1. [SEQUENTIAL_SUBAGENT_IMPLEMENTATION.md](./SEQUENTIAL_SUBAGENT_IMPLEMENTATION.md) - Ready-to-use code
2. [STRONG_WEAK_AGENT_WORKFLOW.md](./STRONG_WEAK_AGENT_WORKFLOW.md) - Full reference
3. Examples in implementation guide

### 📋 I Want the Complete Picture (1 hour)

**→ Read:** [STRONG_WEAK_AGENT_OVERVIEW.md](./STRONG_WEAK_AGENT_OVERVIEW.md)

- Architecture overview
- All documentation mapped
- Implementation status
- Learning paths for different levels

---

## 📚 All Documents

| Document                                    | Purpose         | Audience     | Length      |
| ------------------------------------------- | --------------- | ------------ | ----------- |
| **QUICK_REFERENCE_STRONG_WEAK_WORKFLOW.md** | Cheat sheet     | Everyone     | 1 page      |
| **STRONG_WEAK_AGENT_WORKFLOW.md**           | Full definition | Engineers    | ~1000 lines |
| **SEQUENTIAL_SUBAGENT_IMPLEMENTATION.md**   | Code examples   | Implementers | ~400 lines  |
| **STRONG_WEAK_AGENT_OVERVIEW.md**           | Big picture     | Leaders      | ~300 lines  |
| This file                                   | Navigation      | Everyone     | ~200 lines  |

---

## 🎬 Quick Example

```
User: "The villain timeline shows Green Goblin 3 times instead of 1"

Strong Agent:
  ✓ Finds bug in mergeSeries.ts
  ✓ Writes test showing 3 instead of 1
  ✓ Creates 3 task instructions
  → delegates automatically

Task A (Code Agent):
  ✓ Modifies mergeSeries.ts lines 92-95
  ✓ Runs npm build
  ✓ Verifies public/script.js contains fix

Task B (Test Agent):
  ✓ Writes test: "should deduplicate villains"
  ✓ Runs npm test
  ✓ All tests pass

Task C (Docs Agent):
  ✓ Updates docs/API.md
  ✓ Verifies links work
  ✓ Examples match code

Result:
  ✅ Bug fixed
  ✅ Tests added
  ✅ Documented
  ✅ Fully verified
```

---

## ⚡ Current Status

| Feature                 | Status      | Details                              |
| ----------------------- | ----------- | ------------------------------------ |
| **Sequential workflow** | ✅ Ready    | Fully automated, 10-15 min per issue |
| **Documentation**       | ✅ Complete | 4 comprehensive guides               |
| **Code examples**       | ✅ Included | TypeScript with full types           |
| **Parallel spawner**    | 🔮 Future   | Roadmap outlined, ~2-4 hrs to build  |

---

## 🔑 Key Concepts

### Strong Agent Responsibility

- **Diagnose** the issue completely
- **Prove** it's real (with tests)
- **Plan** the fix (exact steps)
- **Delegate** to weak agents

### Weak Agent Responsibility

- **Execute** exact instructions
- **Verify** each step works
- **Report** results honestly
- **Never improvise**

### Verification at Every Stage

- Prove issue exists (tests)
- Verify code changes (check compiled output)
- Verify tests pass (npm test)
- Verify docs are correct (check links)

---

## 🚀 Getting Started

### Step 1: Understand (Read One of These)

- ⏱️ 5 min: QUICK_REFERENCE_STRONG_WEAK_WORKFLOW.md
- ⏱️ 30 min: STRONG_WEAK_AGENT_WORKFLOW.md
- ⏱️ 1 hour: All four documents

### Step 2: See It Work

- Pick a small issue in your project
- Use QUICK_REFERENCE as a guide
- Follow Strong Agent steps
- Follow Weak Agent steps

### Step 3: Implement

- Study SEQUENTIAL_SUBAGENT_IMPLEMENTATION.md
- Adapt code for your project
- Integrate runSubagent() calls
- Test with real issues

### Step 4: Iterate

- Run 10+ workflows
- Find optimization opportunities
- Measure execution time
- Document your patterns

---

## 🎓 Learning Outcomes

After reading these documents, you'll understand:

1. **Why this pattern works**
   - Separates diagnosis from implementation
   - Automation without manual steps
   - Proof at every stage

2. **How to use it**
   - What Strong Agents do
   - What Weak Agents do
   - How to verify results

3. **How to implement it**
   - Using runSubagent() tool
   - Creating task prompts
   - Aggregating results

4. **How to optimize it**
   - Sequential approach (current)
   - Parallel spawner (future)
   - When each makes sense

---

## ✅ Success Criteria

You've understood this workflow when you can:

- [ ] Explain what Strong and Weak agents do
- [ ] Describe the verification at each stage
- [ ] Create task instructions for an issue
- [ ] Execute Weak Agent steps exactly
- [ ] Verify all results before claiming done
- [ ] Run multiple workflows successfully
- [ ] Identify optimization opportunities

---

## 🔗 Quick Links

**For Understanding:**

- [QUICK_REFERENCE_STRONG_WEAK_WORKFLOW.md](./QUICK_REFERENCE_STRONG_WEAK_WORKFLOW.md) ← Start here if rushed
- [STRONG_WEAK_AGENT_WORKFLOW.md](./STRONG_WEAK_AGENT_WORKFLOW.md) ← Read this for full picture

**For Implementation:**

- [SEQUENTIAL_SUBAGENT_IMPLEMENTATION.md](./SEQUENTIAL_SUBAGENT_IMPLEMENTATION.md) ← Code examples
- [STRONG_WEAK_AGENT_OVERVIEW.md](./STRONG_WEAK_AGENT_OVERVIEW.md) ← Architecture details

**Integration:**

- [CONTEXT_ENGINEERING.md](./CONTEXT_ENGINEERING.md) ← How this fits in your project

---

## ❓ FAQ

**Q: Is this only for bug fixes?**
A: No, works for features, refactoring, documentation, testing - any multi-step task.

**Q: How long does a workflow take?**
A: ~15-20 minutes for a complex issue (diagnosis + 3 tasks sequential).

**Q: Can I parallelize?**
A: Yes - manually now (3× faster), or build a tool later (fully automated parallel).

**Q: Do I have to do all 3 tasks?**
A: No, skip tasks you don't need (e.g., no docs update? Skip task C).

**Q: What if something fails?**
A: Weak Agent reports failure, Strong Agent diagnoses why, retry with updated instructions.

---

## 🎯 Next Action

**Pick what you want to do:**

- [ ] **Just curious?** → Read QUICK_REFERENCE_STRONG_WEAK_WORKFLOW.md (5 min)
- [ ] **Want full understanding?** → Read STRONG_WEAK_AGENT_WORKFLOW.md (30 min)
- [ ] **Ready to implement?** → Read SEQUENTIAL_SUBAGENT_IMPLEMENTATION.md (1 hour)
- [ ] **Building a tool?** → Read all + review Future Enhancement section (2-4 hours)

---

**Version:** 1.0 (January 2026)  
**Status:** Production Ready (Sequential) | Parallel Spawner (Roadmap)  
**Purpose:** Context Engineering Example Repository
